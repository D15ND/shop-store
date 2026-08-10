import { Box, ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';

import { limitProducts } from '@/data/constants';
import { setPage } from '@/store/pagination';
import type { RootState } from '@/store/store';

import styles from './PaginationUI.module.css';

const PaginationUI = () => {
  const page = useSelector((state: RootState) => state.pagination.page);
  const total = useSelector((state: RootState) => state.total.total);
  const dispatch = useDispatch();

  return (
    <Box className={styles.pagination}>
      <Pagination.Root
        count={Math.ceil(total / limitProducts)}
        pageSize={1}
        defaultPage={1}
        page={page + 1}
        onPageChange={(details) => {
          dispatch(setPage(details.page - 1));
        }}
      >
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Box>
  );
};

export default PaginationUI;
