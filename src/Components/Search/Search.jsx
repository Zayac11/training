import React, {useState} from "react";
import s from './Search.module.scss'

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
        return array.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
    };

    const [searchList, setSearchList] = useState(array) //Массив совпадений
    let textHighlighter;
    return (
        <div className={s.container}>
            <input type="text" value={searchValue} onChange={(e) => handleChangeValue(e.target.value)} />
            <div>
                {
                    // searchValue.length > 0 &&
                    searchList.map((search, index) => {
                        //Выделение символов
                        let searchKeywordIdx = search.indexOf(searchValue);
                        if (searchKeywordIdx > -1) {
                            textHighlighter = [
                                search.substring(0, searchKeywordIdx),
                                <span style={{color: '#FFC618'}} key={index}>
                                    {search.substring(searchKeywordIdx, searchKeywordIdx + searchValue.length)}
                                </span>,
                                search.substring(searchKeywordIdx + searchValue.length)
                            ];
                        }
                        return (
                            <div className={s.searchItem} onClick={() => handleDeleteItem(search, array)}>
                                <span>
                                    {textHighlighter}
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
