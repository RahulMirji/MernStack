function Hello(){
  let myName = 'Rahul Mirji';
  let fullName = () => {
    return 'Rahul Mirji'
  }
  let number = 45999;
  return <h3>
    Hey this is {myName}
    This is {fullName()}
    <p>MessageNo:{number}</p>
  </h3>

}
export default Hello;
