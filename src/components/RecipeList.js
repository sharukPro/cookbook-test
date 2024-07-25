import React from 'react';
import styled from 'styled-components';

const RecipeList = ({ recipes, onRecipeSelect, selectedRecipe}) => {

    const SideBar = styled.div`
    width: 30%;
    padding: 10px;
    background-color: #d40867;
    height: 100vh;
    `

    const ListContainer = styled.ul`
    list-style-type: none;
    padding: 0px;
    `

    const ElementList = styled.li`
    color: #fff;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${props => props.$selected? "#e81566" : ""};
    &:hover {
        background-color: #eb6087;
    }
    `

    return (
        <SideBar>
            <h2 style={{ color: '#fff', paddingLeft: '10px' }}>Recipe List</h2>
            <ListContainer>
                {recipes.map((recipe) => (
                    <ElementList key={recipe.id} $selected={recipe.id === selectedRecipe?.id} onClick={() => onRecipeSelect(recipe)}>
                        {recipe.name}
                    </ElementList>
                ))}
            </ListContainer>
        </SideBar>
    );
};

export default RecipeList;
