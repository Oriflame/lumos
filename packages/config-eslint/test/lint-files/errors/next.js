export function A() {
  return (
    <>
      {['a'].map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}
const regex = new RegExp('myRegex');
console.log(regex.test('my test'));
