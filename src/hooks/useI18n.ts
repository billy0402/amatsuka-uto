import { useRouter } from 'next/router';

import { useLanguageQuery } from 'next-export-i18n';

const useI18n = () => {
  const [language] = useLanguageQuery();

  const router = useRouter();

  const i18nRouter = (pathname: string) => {
    return { pathname, query: { ...language, ...router.query } };
  };

  return { i18nRouter };
};

export default useI18n;
