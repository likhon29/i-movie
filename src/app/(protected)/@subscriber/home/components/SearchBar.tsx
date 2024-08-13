import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Form className="d-flex">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search" // &#xF002; is the Unicode for the search icon
          aria-label="Search"
          style={{
            fontFamily: "Arial, FontAwesome",
            paddingLeft: "",
          }}
        />
        <InputGroup.Text className="bg-white border-0">
          <FaSearch />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
