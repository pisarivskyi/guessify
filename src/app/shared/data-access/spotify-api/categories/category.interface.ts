import { BaseRequestInterface, ImageResourceInterface } from '@shared/data-access/spotify-api';

export interface CategoriesInterface {
  categories: BaseRequestInterface<CategoryInterface>;
}

export interface CategoryInterface {
  id: string;
  href: string;
  icons: ImageResourceInterface[]
  name: string;
}
