import React, { useState, useEffect } from "react";
import {
  Form,
  InputGroup,
  Button,
  Col,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { BsSearch, BsExclamationCircle } from "react-icons/bs";

const SearchInput = (props) => {
  const {
    label = "",
    description,
    placeholder,
    name,
    required,
    size,
    formRegister = () => {},
    input = ["", {}, () => {}],
    onClickHandler = () => {},
  } = props;

  const [value, setValue] = useState("");
  const [field, obj, set] = input;

  useEffect(() => {
    setValue(obj[field]);
  }, [obj]); // eslint-disable-line

  useEffect(() => {
    set({ ...obj, [field]: value });
  }, [value]); // eslint-disable-line

  return (
    <Form.Group as={Col} md={size || 6}>
      <Form.Label>
        {label + " "}
        {required && <em style={{ color: "red" }}>* </em>}
        {description && (
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>{description}</Tooltip>}
          >
            <em>
              <BsExclamationCircle />
            </em>
          </OverlayTrigger>
        )}
      </Form.Label>
      <InputGroup>
        <Form.Control
          name={name}
          value={obj[field]}
          onChange={(e) => setValue(e.target.value)}
          ref={formRegister()}
          onKeyDown={(e) => {
            if (e.keyCode === 13) onClickHandler();
          }}
          placeholder={placeholder}
        />
        <InputGroup.Append>
          <Button onClick={() => onClickHandler()}>
            <BsSearch />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  );
};

export default SearchInput;
