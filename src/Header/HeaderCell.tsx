import * as React from 'react';
import type { CellProps } from '../Cell';
import Cell from '../Cell';
import useCellResize from './useCellResize';
import { useContext } from '@rc-component/context';
import TableContext from '../context/TableContext';

interface HeaderCellProps<RecordType> extends CellProps<RecordType> {
  columnKey?: React.Key;
  resizable?: boolean;
  minWidth?: number;
}

function HeaderCell<RecordType>({
  columnKey,
  resizable,
  minWidth,
  ...cellProps
}: HeaderCellProps<RecordType>) {
  const { supportSticky } = useContext(TableContext, ['supportSticky']);

  const { fixRight, prefixCls } = cellProps;
  const isFixRight = typeof fixRight === 'number' && supportSticky;
  const cellPrefixCls = `${prefixCls}-cell`;

  const resizeHandleNode = useCellResize(columnKey, isFixRight, cellPrefixCls, resizable, minWidth);

  return <Cell {...cellProps} appendNode={resizeHandleNode} />;
}

export default HeaderCell;
