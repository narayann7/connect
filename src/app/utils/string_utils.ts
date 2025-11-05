class StringUtils {
  static parseUrlToDomain(str: string): string | null {
    try {
      const url = (new URL(str)).href.replace(/(^\w+:|^)\/\//, '').replace(/\/.*$/, '');
      return url;
    } catch (e) {
      console.error("Failed to parse URL:", e);
      return null;
    }
  }
}



export default StringUtils;