import { basePath } from '@lib/env';

const imageRouter = (src: string) => `${basePath}/images/${src}`;

export { imageRouter };
