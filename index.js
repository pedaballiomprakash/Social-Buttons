const Button = (props) => {
  const { className, content } = props;
  return <button className={`button ${className}`}>{content}</button>;
};

const element = (
  <div className="button-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div class="buttons-container">
      <Button className="yellow-button" content="Like" />
      <Button className="white-button" content="Comment" />
      <Button className="blue-button" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
