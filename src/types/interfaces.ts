export interface Skill {
  id: keyof Skills;
  percent: string;
  label: string;
  user_name: string;
}
export interface Skills {
  nextjs: string;
  figma: string;
  js: string;
  express: string;
  mern: string;
  mongodb: string;
  node: string;
  react: string;
  reactnative: string;
  sketch: string;
  wp: string;
  xd: string;
  java: string;
  python: string;
}
export interface MaleAvatar {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  16: string;
  17: string;
  18: string;
  19: string;
  20: string;
  21: string;
  22: string;
  23: string;
  24: string;
  25: string;
  26: string;
  27: string;
  28: string;
}
export interface FemaleAvatar {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  16: string;
  17: string;
  18: string;
  19: string;
  20: string;
  21: string;
  22: string;
  23: string;
  24: string;
  25: string;
  26: string;
  27: string;
  28: string;
  29: string;
  30: string;
  31: string;
  32: string;
  33: string;
  34: string;
}
export interface link {
  url: string;
  type: keyof linkKey;
}
export interface linkType {
  label: string;
  icon: any;
}
export interface linkKey {
  github: linkType;
  whatsapp: linkType;
  linkedin: linkType;
  facebook: linkType;
  instagram: linkType;
}
