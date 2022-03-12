let salesData = {
  revenues: 0,
  totalSales: 1830,
  averageTicket: 43759
}

let rankingData = []

const initCharts = () => {
  loadSalesData()
  loadDealers()
  handleTabClick()

  chartsjs()
  chartOrder()
  chartDealers()
}

const handleTabClick = () => {
  const tabLinkSales = document.querySelector('.report__category--sales')
  const tabSalesContent = document.querySelector('.tab__sales')

  const tabLinkOrders = document.querySelector('.report__category--orders')
  const tabOrdersContent = document.querySelector('.tab__order')

  const tabLinkDealers = document.querySelector('.report__category--dealers')
  const tabDealersContent = document.querySelector('.tab__dealers')

  const changeTabActive = (tab, tabContent) => {
    tabLinkSales.classList.remove('report__categories--link-active')
    tabSalesContent.classList.add('tab--hidden')

    tabLinkOrders.classList.remove('report__categories--link-active')
    tabOrdersContent.classList.add('tab--hidden')

    tabLinkDealers.classList.remove('report__categories--link-active')
    tabDealersContent.classList.add('tab--hidden')

    tab.classList.add('report__categories--link-active')
    tabContent.classList.remove('tab--hidden')
  }

  tabLinkSales.onclick = () => {
    changeTabActive(tabLinkSales, tabSalesContent)
  }

  tabLinkOrders.onclick = () => {
    changeTabActive(tabLinkOrders, tabOrdersContent)
  }

  tabLinkDealers.onclick = () => {
    changeTabActive(tabLinkDealers, tabDealersContent)
  }
}

const loadDealers = () => {
  fetch('https://test-final.b8one.academy/resellers/ranking')
    .then(response => response.json())
    .then(response => {
      rankingData = response.resellers
      console.log(rankingData)
      renderDealers()
    })
    .catch(error =>
      console.log('Erro ao carregar as informações de revendedores')
    )
}

const renderDealers = () => {
  let contentHtml = ''
  const listDealers = document.querySelector('.stats__lists')

  rankingData.forEach((item, index) => {
    contentHtml += `
      <div class="stats__list--item">
        <h4 class="stats__item--position">${index + 1}</h4>
        <div class="user__avatar">ME</div>
        <div class="stats__item--user_info">
          <h4 class="stats__item--user_name">${item.name}</h4>
          <div class="stats__item--user_info_detail">
            <span class="stats__item--order_count">${
              item.ordersCount
            } pedidos</span>
            <span class="stats__item--progress ${
              item.percentage.indexOf('-') != -1 ? 'negative' : 'positive'
            }">${item.percentage}</span>
          </div>
        </div>
      </div>
    `
  })

  listDealers.innerHTML = contentHtml
}

const loadSalesData = () => {
  fetch('https://test-final.b8one.academy/sales')
    .then(response => response.json())
    .then(response => {
      salesData = response
      updateSalesData()
    })
    .catch(error =>
      console.log(
        'Aconteceu um erro ao tentar carregar as informações de vendas'
      )
    )
}

const updateSalesData = () => {
  const revenue = document.querySelector('.card__revenues .value')
  const totalSales = document.querySelector('.card__total_sales .value')
  const averageTicket = document.querySelector('.card__average_ticket .value')

  revenue.innerHTML = formatter.format(salesData.revenues)
  totalSales.innerHTML = salesData.totalSales
  averageTicket.innerHTML = formatter.format(salesData.averageTicket)
}

const chartsjs = () => {
  const ctx = document.getElementById('myChart').getContext('2d')
  const labels = [
    '06/10/21',
    '07/10/21',
    '08/10/21',
    '09/10/21',
    '10/10/21',
    '11/10/21',
    '12/10/21'
  ]
  const data = {
    labels,
    datasets: [
      {
        data: [0, 30, 15, 15, 50, 15, 15],
        label: 'Estornado',
        fill: false,
        radius: 0,
        backgroundColor: '#425DC7',
        borderColor: '#425DC7'
      },
      {
        data: [0, 20, 0, 0, 45, 0, 50],
        label: 'Cancelado',
        fill: false,
        radius: 0,
        backgroundColor: '#F03460',
        borderColor: '#F03460'
      },
      {
        data: [0, 30, 35, 55, 35, 45, 100],
        label: 'Não pago',
        fill: false,
        radius: 0,
        backgroundColor: '#FFBE00',
        borderColor: '#FFBE00'
      },
      {
        data: [0, 70, 70, 130, 50, 190, 190],
        label: 'Pago',
        fill: false,
        radius: 0,
        backgroundColor: '#158F2E',
        borderColor: '#158F2E'
      }
    ]
  }
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          pointStyle: 'circle'
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            padding: 25
          },
          align: 'start'
        }
      },
      scales: {
        x: {
          display: false,
          borderWidth: 0
        },
        y: {
          min: 0,
          ticks: {
            stepSize: 50
          }
        }
      }
    }
  }

  const myChart = new Chart(ctx, config)
}

const chartOrder = () => {
  const ctx = document.getElementById('myChartOrder').getContext('2d')
  const labels = [
    '06/10/21',
    '07/10/21',
    '08/10/21',
    '09/10/21',
    '10/10/21',
    '11/10/21',
    '12/10/21'
  ]
  const data = {
    labels,
    datasets: [
      {
        data: [0, 55, 90, 95, 140, 45, 200, 180],
        label: 'Total de pedidos',
        fill: false,
        radius: 0,
        backgroundColor: '#425DC7',
        borderColor: '#425DC7'
      }
    ]
  }
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          pointStyle: 'circle'
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            padding: 25
          },
          align: 'start'
        }
      },
      scales: {
        x: {
          display: false,
          borderWidth: 0
        },
        y: {
          min: 0,
          ticks: {
            stepSize: 50
          }
        }
      }
    }
  }

  const myChart = new Chart(ctx, config)
}
const chartDealers = () => {
  const ctx = document.getElementById('myChartDealers').getContext('2d')
  const labels = [
    '06/10/21',
    '07/10/21',
    '08/10/21',
    '09/10/21',
    '10/10/21',
    '11/10/21',
    '12/10/21'
  ]
  const data = {
    labels,
    datasets: [
      {
        data: [0, 55, 90, 95, 140, 45, 200, 180],
        label: 'Total de Vendas',
        fill: false,
        radius: 0,
        backgroundColor: '#425DC7',
        borderColor: '#425DC7'
      },
      {
        data: [0, 30, 35, 55, 35, 45, 100],
        label: 'Quantidade de pedidos',
        fill: false,
        radius: 0,
        backgroundColor: '#FFBE00',
        borderColor: '#FFBE00'
      },
      {
        data: [0, 70, 70, 130, 50, 190, 190],
        label: 'Comissão a pagar',
        fill: false,
        radius: 0,
        backgroundColor: '#158F2E',
        borderColor: '#158F2E'
      }
    ]
  }
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          pointStyle: 'circle'
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            padding: 25
          },
          align: 'start'
        }
      },
      scales: {
        x: {
          display: false,
          borderWidth: 0
        },
        y: {
          min: 0,
          ticks: {
            stepSize: 50
          }
        }
      }
    }
  }

  const myChart = new Chart(ctx, config)
}
