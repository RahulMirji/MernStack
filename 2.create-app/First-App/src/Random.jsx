function Random(){

  let number = Math.random() * 100;
  return <h1>
    This is a random number:{Math.round(number)}
  </h1>
}

export default Random;