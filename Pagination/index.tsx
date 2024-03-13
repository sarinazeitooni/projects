import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from '@monta/icons';
import { useBreakLG } from '@/src/utils';

const DOTS = '...';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  isMobile,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) return range(1, totalPageCount);

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = (isMobile ? 1 : 3) + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;
  const isMobile = useBreakLG();
  const paginationRange =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
      isMobile: !isMobile,
    }) || [];

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => onPageChange(currentPage + 1);

  const onPrevious = () => onPageChange(currentPage - 1);

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={clsx(styles['pagination-container'], className)}>
      <ChevronLeft
        className={clsx(styles['arrows'], currentPage === 1 && styles['arrows--disabled'])}
        onClick={onPrevious}
      />
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) return <li className={styles['dots']}>&#8230;</li>;
        return (
          <li
            className={clsx(
              styles['pagination-item'],
              pageNumber === currentPage && styles['pagination-item--selected']
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <ChevronRight
        className={clsx(styles['arrows'], currentPage === lastPage && styles['arrows--disabled'])}
        onClick={onNext}
      />
    </ul>
  );
};

export default Pagination;
