import { useCallback, useEffect, useRef } from 'react'

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

const useMorphingText = (
  texts: string[],
  morphTime: number,
  cooldownTime: number,
) => {
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef(new Date())

  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current]
      if (!current1 || !current2 || !texts || texts.length === 0) return

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

      const invertedFraction = 1 - fraction
      current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`

      current1.textContent = texts[textIndexRef.current % texts.length]
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length]
    },
    [texts],
  )

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current
    cooldownRef.current = 0

    let fraction = morphRef.current / morphTime

    if (fraction > 1) {
      cooldownRef.current = cooldownTime
      fraction = 1
    }

    setStyles(fraction)

    if (fraction === 1) {
      textIndexRef.current++
    }
  }, [setStyles, morphTime, cooldownTime])

  const doCooldown = useCallback(() => {
    morphRef.current = 0
    const [current1, current2] = [text1Ref.current, text2Ref.current]
    if (current1 && current2) {
      current2.style.filter = 'none'
      current2.style.opacity = '100%'
      current1.style.filter = 'none'
      current1.style.opacity = '0%'
    }
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const newTime = new Date()
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000
      timeRef.current = newTime

      cooldownRef.current -= dt

      if (cooldownRef.current <= 0) doMorph()
      else doCooldown()
    }

    animate()
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [doMorph, doCooldown])

  return { text1Ref, text2Ref }
}

interface MorphingTextProps {
  className?: string
  texts: string[]
  color?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
  /** Transition duration in seconds (default: 1.5) */
  morphDuration?: number
  /** Pause between transitions in seconds (default: 0.5) */
  pauseDuration?: number
}

const longestText = (texts: string[]) =>
  texts.reduce((a, b) => (a.length >= b.length ? a : b), '')

const Texts: React.FC<
  Pick<MorphingTextProps, 'texts' | 'morphDuration' | 'pauseDuration'>
> = ({ texts, morphDuration = 1.5, pauseDuration = 0.5 }) => {
  const { text1Ref, text2Ref } = useMorphingText(
    texts,
    morphDuration,
    pauseDuration,
  )
  return (
    <>
      {/* invisible phantom — sizes the container to the longest text */}
      <span className="invisible whitespace-nowrap" aria-hidden>
        {longestText(texts)}
      </span>
      <span className="absolute inset-0 whitespace-nowrap" ref={text1Ref} />
      <span className="absolute inset-0 whitespace-nowrap" ref={text2Ref} />
    </>
  )
}

const SvgFilters: React.FC = () => (
  <svg id="filters" className="hidden" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
)

const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
  color,
  fontSize,
  fontFamily,
  fontWeight = 'bold',
  morphDuration,
  pauseDuration,
}) => (
  <div
    className={cn(
      'relative inline-block leading-none',
      className,
    )}
    style={{
      color,
      fontSize: fontSize ?? '1rem',
      fontFamily,
      fontWeight,
      filter: 'url(#threshold)',
    }}
  >
    <Texts
      texts={texts}
      morphDuration={morphDuration}
      pauseDuration={pauseDuration}
    />
    <SvgFilters />
  </div>
)

export { MorphingText }
