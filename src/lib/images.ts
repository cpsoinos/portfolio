export const TRANSFORM_BASE_URL = 'https://portfolio.anderapps.com/cdn-cgi/image/f=auto';
export const BUCKET_BASE_URL = 'https://portfolio-r2.anderapps.com';

export const buildImageUrl = (path: string) => `${TRANSFORM_BASE_URL}/${BUCKET_BASE_URL}/${path}`;
