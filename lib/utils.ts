/**
 * `cn` comes from @hanzo/ui, the one class-name composer in this estate.
 *
 * It used to be clsx + tailwind-merge — the shadcn shape. There is no utility
 * engine left to de-conflict, so the merge pass had nothing to merge, and the
 * two dependencies existed to answer a question the component library already
 * answers.
 */
export { cn, type ClassValue } from '@hanzo/ui'
