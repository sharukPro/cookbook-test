import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 70%;
padding: 10px 35px;
`

const MainHeader = styled.h2`
text-align: center;
text-transform: uppercase;
color: #d40867;
`

const RecipeDetails = ({ recipe }) => {
    if (!recipe) {
        return <Container><MainHeader>Select a recipe to see details</MainHeader></Container>;
    }

    return (
        <Container>
            <MainHeader>{recipe.name}</MainHeader>
            <p style={{color: '#d40867'}}><strong>Author:</strong> {recipe.author}</p>
            <img src={recipe.image} alt={recipe.name} style={{ width: '150px', height: '150px' }} />
            <h3 style={{color: '#d40867'}}>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3 style={{color: '#d40867'}}>Instructions</h3>
            <p>{recipe.instructions}</p>
            </Container>
    );
};

export default RecipeDetails;
