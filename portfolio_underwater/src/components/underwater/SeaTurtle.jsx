import tortoiseImage from '../../assets/tortoise.png'

function SeaTurtle() {
  return (
    <div className="sea-turtle" aria-label="Swimming sea turtle illustration">
      <img src={tortoiseImage} alt="Sea turtle illustration" className="tortoise-image" />
    </div>
  )
}

export default SeaTurtle
