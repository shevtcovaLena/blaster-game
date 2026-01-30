/**
 * Перечисление цветов тайлов
 * Используем enum для типобезопасности
 */
export enum TileColor {
    RED = 'red',
    BLUE = 'blue',
    GREEN = 'green',
    YELLOW = 'yellow',
    PURPLE = 'purple'
}

/**
 * Константа для удобного получения всех цветов
 */
export const ALL_COLORS = Object.values(TileColor);
