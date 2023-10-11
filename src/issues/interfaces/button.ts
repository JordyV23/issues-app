export enum sizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export interface button {
  icon: string;
  color?: string;
  size: sizes;
  action: () => void;
}
