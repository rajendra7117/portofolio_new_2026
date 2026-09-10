import treesImage from '../../assets/trees.png'

function Seabed() {
  return (
    <div className="seabed" aria-hidden="true">
      <div className="trees-scene">
        <div
          className="tree-half tree-left"
          style={{ backgroundImage: `url(${treesImage})`, backgroundPosition: 'left center' }}
        />
        <div
          className="tree-half tree-right"
          style={{ backgroundImage: `url(${treesImage})`, backgroundPosition: 'right center' }}
        />
      </div>
    </div>
  )
}

export default Seabed
