export default function specialAttackInfo(character) {
  const specialAttackInfo = []
  for (let specialAttack of character.special) {
    let {id, name, description = "Описание недоступно", icon} = specialAttack    
    specialAttackInfo.push({id, name, description, icon})    
  }
  return specialAttackInfo
}
