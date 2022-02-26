import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export default function GifGrid({ category }) {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading</p>}

      <div className='card-grid animate__animated animate__bounce'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

GifGrid.propTypes = {};
