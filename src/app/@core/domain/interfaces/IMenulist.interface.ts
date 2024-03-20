export interface IMenuList {
  label: string;
  onClick: Function;
  icon?: string;
  itemColor?: string; // Você pode usar uma string como 'primary', 'secondary', etc.
  textColor?: string;
}
