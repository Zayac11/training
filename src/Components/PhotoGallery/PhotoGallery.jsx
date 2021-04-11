import React from "react";
import s from './PhotoGallery.module.scss'
import "react-image-gallery/styles/scss/image-gallery.scss"
import ImageGallery from "react-image-gallery";

const PhotoGallery = (props) => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        }
    ];

    const renderLeftNav = (onClick, disabled) => {
        return (
            <button
                className='image-gallery-custom-left-nav'
                disabled={disabled}
                onClick={onClick}>Налево</button>
        )
    }
    const renderRightNav = (onClick, disabled) => {
        return (
            <button
                className='image-gallery-custom-left-nav'
                disabled={disabled}
                onClick={onClick}>Направо</button>
        )
    }
    const renderFullscreenButton= (onClick, isFullscreen) => {
        return (
            <button
                type='button'
                className={
                    `image-gallery-fullscreen-button${isFullscreen ? ' active' : ''}`}
                onClick={onClick}
            />
        );
    }

    return (
        <div>
            <ImageGallery
                items={images}
                showPlayButton={false}
                showThumbnails={false}
                renderLeftNav={renderLeftNav}
                renderRightNav={renderRightNav}
                renderFullscreenButton={renderFullscreenButton}
            />
        </div>
    )
}

export default PhotoGallery
