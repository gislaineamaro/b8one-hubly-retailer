let data = []

const initInsights = () => {
  loadData()
}

const loadData = () => {
  fetch('https://test-final.b8one.academy/products/more-sold')
    .then(response => response.json())
    .then(response => {
      data = response.products
      renderTable()
    })
    .catch(response => console.log('Erro ao carregar dados de insigths'))
}

const renderTable = () => {
  let contentHtml = ''
  const tableBody = document.querySelector('.insights__table--body')

  data.forEach((item, index) => {
    const positionColumn = `
    <div class="insights__table--row_column insights__table--position_column">
      <span>${index + 1}</span>
    </div>
  `
    const productColumn = `
    <div class="insights__table--row_column insights__table--product_column">
      <span>${item.name}</span>
    </div>
  `
    const orderNumberColumn = `
    <div class="insights__table--row_column insights__table--order_number_column">
      <span>${item.orderId}</span>
    </div>
  `
    const departmentColumn = `
    <div class="insights__table--row_column insights__table--department_column">
      <span>${item.department}</span>
    </div>
  `
    const priceColumn = `
    <div class="insights__table--row_column insights__table--price_column">
      <span>${formatter.format(item.price)}</span>
    </div>
  `
    const imageColumn = `
    <div class="insights__table--row_column insights__table--image_column">
      <img src=${item.image}/>
    </div>
    `
    contentHtml += `
    <div class="insights__table--row">
      <div class="insights__table--desktop">
        ${positionColumn}
        ${imageColumn}
        ${productColumn}
        ${orderNumberColumn}
        ${departmentColumn}
        ${priceColumn}
      </div>
        
      <div class="insights__table--mobile">
        <div class="insigths__table--info_header">
          ${imageColumn}
          ${productColumn}                
        </div>

        <div class="insights__table--info_group">
          ${positionColumn}
          ${orderNumberColumn}
          ${priceColumn}
        </div>
      </div>
    </div>
  `
  })

  tableBody.innerHTML = contentHtml
}
