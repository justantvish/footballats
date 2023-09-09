import React, { useState, useEffect, useMemo } from 'react';
import { TableDataObj } from 'interfaces/interfaces';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ExpandedState,
  getExpandedRowModel,
  getSortedRowModel,
  SortingState
} from '@tanstack/react-table';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import Card from 'components/UI/Card/Card';

import classes from './TableDefault.module.scss';

type tableProps = {
  tableData: TableDataObj[];
  tableColumns: any;
  dataLoading?: Boolean;
  tableColsWidth: string[];
  error?: any;
};

const TableDefault: React.FC<tableProps> = ({tableData, tableColumns, dataLoading, tableColsWidth}) => {
  const [data, setData] = useState<TableDataObj[]>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [sorting, setSorting] = React.useState<SortingState>([]);

  useEffect(() => {
    setData([...tableData]);
  }, [tableData]);

  const colsWidth = tableColsWidth.join(' ');

  const columns = useMemo(() => [
    {
      id: 'selection',
      header: ({ table }: any) => (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }: any) => (
        <Checkbox
          {...{
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
    },
    {
      id: 'expandable',
      cell: ({ row }: any) => (
        <button className={`${classes.btn_expand} ${row.getIsExpanded() ? classes.expanded : ''}`}
          {...{
            onClick: () => row.toggleExpanded()
          }}
        >
          <i className="icon-arrow-down" />
        </button>
      ),
    },
    ...tableColumns
  ], []);

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <Card>
        <div className={classes.holder}>
            {dataLoading && <div>Data is Loading...</div>}
            {data.length > 0 && 
            <div
                className={classes.table}
                style={{gridTemplateColumns: `32px 32px ${colsWidth}`}
            }>
                {table.getHeaderGroups().map(headerGroup => (
                    <div className={classes.row} key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <div
                            className={classes.cellhead}
                            key={header.id}
                            
                            {...{
                                onClick: header.column.getToggleSortingHandler(),
                            }}
                        >
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                            {{
                                asc: <i className='icon-sort' />,
                                desc: <i className='icon-sort' style={{transform: 'rotate(180deg)'}} />,
                            }[header.column.getIsSorted() as string] ?? null}
                        </div>
                    ))}
                    </div>
                ))}
                <>
                {table.getRowModel().rows.map(row => (
                    <React.Fragment key={row.id}>
                    <div className={classes.row}>
                        {row.getVisibleCells().map(cell => (
                        <div
                          className={classes.cell}
                          key={cell.id}
                        >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                        ))}
                    </div>
                    {row.getIsExpanded() ? (
                        <div className={classes.subrow}>
                          <div>
                            {row.original.player_image !== '' && <img onLoad={() => console.log('Loaded')} onError={() => console.log('Error')} src={row.original.player_image} alt={row.original.player_name} />}
                          </div>
                        </div>
                    ) : null}
                    </React.Fragment>
                ))}
                </>
            </div>}
        </div>
    </Card>
  );
};

export default TableDefault;
