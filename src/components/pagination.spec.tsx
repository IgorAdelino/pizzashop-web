import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

// Spy
const onPageChangeCallBack = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallBack.mockClear()
  })

  it('Should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('Should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallBack}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallBack).toHaveBeenCalledWith(1)
  })

  it('Should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallBack}
      />,
    )

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(previousPageButton)

    expect(onPageChangeCallBack).toHaveBeenCalledWith(4)
  })

  it('Should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallBack}
      />,
    )

    const firstPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(firstPageButton)

    expect(onPageChangeCallBack).toHaveBeenCalledWith(0)
  })

  it('Should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallBack}
      />,
    )

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(lastPageButton)

    expect(onPageChangeCallBack).toHaveBeenCalledWith(19)
  })
})
