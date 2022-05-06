import React, { useEffect, useState } from "react";
import { Category } from "../Category/Category";
import { Item, List } from "./ListOfCategoriesStyles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://petgram-server-aosorio9559.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      // const newShowFixed = window.scrollY > 200;
      // showFixed !== newShowFixed && setShowFixed(newShowFixed);
      setShowFixed(window.scrollY > 200);
    };

    document.addEventListener("scroll", onScroll);

    /* Quitar el elemento para que cuando el componente se destruya, el navegador no siga escuchando el evento. */
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  if (loading) return "Loading...";

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
