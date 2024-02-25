import './App.css'

function App() {
  return (
    <main>
      <div className="nft-image">
        <img src="image-equilibrium.jpg" alt="Equilibrium NFT" />
        <div className="overlay">
          <img src="icon-view.svg" alt="View Icon" />
        </div>
      </div>
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className="price-and-date">
        <div className="price">
          <img src="icon-ethereum.svg" alt="Ethereum Icon" />
          <p>0.041 ETH</p>
        </div>
        <div className="date">
          <img src="icon-clock.svg" alt="Clock Icon" />
          <p>3 days left</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="creator">
        <img src="image-avatar.png" alt="Creator Avatar" />
        <p>Creation of&nbsp;</p><a href="">Jules Wyvern</a>
      </div>
    </main>
  )
}

export default App
