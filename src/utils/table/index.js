import { reactive, watch } from 'vue'

export function tableDefaultData() {
  const table = reactive({
    data: [],
    pagination: {
      currentPage: 1,
      pageSize: 15,
      total: 0,
      from: 1,
      lastPage: 1,
      to:1
    },
    nowRow: {
      index: 0,
      row: {}
    },
    queryParams: {},
    loading: false
  })

  watch(table.queryParams, () => {
    table.pagination.currentPage = 1
  })

  table.getQueryParams = () => {
    return {...table.queryParams, page: table.pagination.currentPage}
  }

  return table
}


export function tableDataFormat(response, table) {

  table.data = response.data.data.list

  let curPage = response.data.data.curPage
  let count = response.data.data.count
  table.pagination = {
    currentPage: curPage,
    pageSize: 20,
    total: count,
    from: 1,
    lastPage:1,
    to: 1
  }
   /*
   table.data = response.data.data

  let meta = response.data.meta
  table.pagination = {
    currentPage: meta.current_page,
    pageSize: meta.per_page,
    total: meta.total,
    from: meta.from,
    lastPage: meta.last_page,
    to: meta.to
  }*/

  table.loading = false
}