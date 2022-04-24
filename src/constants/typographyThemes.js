export const TYPOGRAPHY_KEYS = {
  TITLE: 'title',
  SUBTTITLE: 'subtitle',
  BODY: 'body',
  LARGE_TEXT: 'body',
  SMALL_TEXT: 'smallText',
};

const THEME_LARGE = 'THEME_LARGE';
const THEME_NORMAL = 'THEME_NORMAL';

const TYPOGRAPHY_THEME_NORMAL = {
  [TYPOGRAPHY_KEYS.TITLE]: {
    fontSize: 24,
  },
  [TYPOGRAPHY_KEYS.SUBTTITLE]: {
    fontSize: 19,
  },
  [TYPOGRAPHY_KEYS.LARGE_TEXT]: {
    fontSize: 15,
  },
  [TYPOGRAPHY_KEYS.BODY]: {
    fontSize: 12,
  },
  [TYPOGRAPHY_KEYS.SMALL_TEXT]: {
    fontSize: 8,
  },
};
const TYPOGRAPHY_THEME_LARGE = {
  [TYPOGRAPHY_KEYS.TITLE]: {
    fontSize: 31,
  },
  [TYPOGRAPHY_KEYS.SUBTTITLE]: {
    fontSize: 25,
  },
  [TYPOGRAPHY_KEYS.LARGE_TEXT]: {
    fontSize: 20,
  },
  [TYPOGRAPHY_KEYS.BODY]: {
    fontSize: 16,
  },
  [TYPOGRAPHY_KEYS.SMALL_TEXT]: {
    fontSize: 10,
  },
};
export const TYPOGRAPHY_DICT = {
  [THEME_LARGE]: {
    key: THEME_LARGE,
    label: 'Velika slova',
    themeConfig: TYPOGRAPHY_THEME_LARGE,
  },
  [THEME_NORMAL]: {
    key: THEME_NORMAL,
    label: 'Normalna slova',
    themeConfig: TYPOGRAPHY_THEME_NORMAL,
  },
};
