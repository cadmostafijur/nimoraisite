// Product explorer tabs: swap the overview + brief content
const products = {
  token: {
    category: 'TOKEN / CREATE',
    title: 'Shape your token project.',
    desc: 'Define your token identity and prepare its configuration.',
    d1: 'Name, symbol and visual identity.',
    d2: 'Network and configuration choices.',
    d3: 'Review and order preparation.',
    config: 'TOKEN configuration',
    icon: 'assets/icons/hexagon-lg.svg'
  },
  nft: {
    category: 'NFT / BUILD',
    title: 'Create your NFT collection.',
    desc: 'Define your collection identity and prepare its configuration.',
    d1: 'Collection name, artwork and visual identity.',
    d2: 'Network and configuration choices.',
    d3: 'Review and order preparation.',
    config: 'NFT configuration',
    icon: 'assets/icons/layers.svg'
  },
  coin: {
    category: 'COIN / EXPLORE',
    title: 'Plan your coin network.',
    desc: 'Define your coin identity and prepare its network configuration.',
    d1: 'Name, symbol and visual identity.',
    d2: 'Network structure and configuration choices.',
    d3: 'Review and order preparation.',
    config: 'COIN configuration',
    icon: 'assets/icons/network.svg'
  }
};

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.toggle('is-active', t === tab));
    const data = products[tab.dataset.tab];
    document.querySelectorAll('[data-field]').forEach(el => {
      const key = el.dataset.field;
      if (key === 'icon') el.src = data.icon;
      else el.textContent = data[key];
    });
  });
});
