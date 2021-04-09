import React, {useState} from "react";
import s from './Search.module.scss'
import TypeChecker from 'typeco';

const Search = (props) => {

    const initialArray = ['cinema',
        'music',
        'games',
        'tv',
        'art',
        'images',
        'programming',
        'portal',
        'documents',
        'folders',
        'repositories',
        'react',]

    const [searchValue, setSearchValue] = useState('') //value инпута
    const [array, setArray] = useState(initialArray.sort())

    const [tags, setTags] = useState([]) //Массив тегов

    const handleDeleteItem = (value, array) => {
        let filteredArray = array.filter(arr => arr !== value)
        let newList = getMatchedList(searchValue, filteredArray)
        setArray(filteredArray)
        setSearchList(newList)
        setTags([
            ...tags, value
        ])
    }
    const handleAddItem = (value) => {
        let filteredArray = tags.filter(tag => tag !== value)
        let mainArray = [
            ...array,
            value
        ]
        let newList = getMatchedList(searchValue, mainArray.sort())
        setArray(mainArray.sort())
        setSearchList(newList)
        setTags(filteredArray)
    }

    const handleChangeValue = (value) => {
        setSearchList(getMatchedList(value, array))
        setSearchValue(value)
    }

    const getMatchedList = (searchText, array) => {
        if (TypeChecker.isEmpty(searchText)) return array;
        return array.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
    };

    const [searchList, setSearchList] = useState(array) //Массив совпадений

    return (
        <div className={s.container}>
            <input type="text" value={searchValue} onChange={(e) => handleChangeValue(e.target.value)} />
            {/*<SearchField*/}
            {/*    placeholder="Search..."*/}
            {/*    onChange={handleChange}*/}
            {/*    classNames="test-class"*/}
            {/*/>*/}

            <div>
                {
                    // searchValue.length > 0 &&
                    searchList.map((search, index) => {
                        return (
                            <div className={s.searchItem} onClick={() => handleDeleteItem(search, array)}>
                                <span>
                                    {search}
                                </span>
                            </div>
                        )
                    })
                }
            </div>

            {
                tags.length > 0 &&
                    <div className={s.tagContainer}>
                        {
                            tags.map((tag, index, array) => {
                                return (
                                    <span className={s.tag}>
                                        <span className={s.tagItem}>{tag}</span>
                                        <button className={s.tagBtn} onClick={() => handleAddItem(tag)}>&times;</button>
                                    </span>
                                )
                            })
                        }
                    </div>
            }

        </div>
    )
}

export default Search
