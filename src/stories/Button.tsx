function Button(props: any) {
  return (
    <button {...props} className={props.className}>
      Press Me
    </button>
  );
}

export default Button;
