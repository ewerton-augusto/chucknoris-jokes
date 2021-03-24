import React, { useEffect, useState } from 'react';
import Logo from '../../assets/img/logo.png';
import LoadGif from '../../assets/img/giphy.gif';
import { HomeContainer } from './style';
import api from '../../service/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface IJoke {
    id: string;
    icon_url: string;
    value: string;
}

const Home: React.FC = () => {
    const [categoriesJoke, setCategoriesJoke] = useState([]);
    const [categorySelected, setCategorySelected] = useState<IJoke>()
    const [searchJoke, setSearchJoke] = useState('')
    const [isLoad, setIsLoad] = useState(false)
    const [resultSearch, setResultSearch] = useState<IJoke[]>([])

    useEffect(() => {
        api.get('jokes/categories').then(
            response => {
                setCategoriesJoke(response.data)
            }
        )
    }, [])

    async function handleJokes() {
        setIsLoad(true)
        const response = await api.get(`jokes/search?query=${searchJoke}`)
        setResultSearch(response.data.result)
        if (response.status === 200) {
            setIsLoad(false)
        }
    }

    async function handleJokeByCategory(e: string) {
        setIsLoad(true)
        const response = await api.get(`jokes/random?category=${e}`)
        setCategorySelected(response.data)
        if (response.status === 200) {
            setIsLoad(false)
        }
    }

    return (
        <HomeContainer>

            <div className="backgroung-card">

                <img src={Logo} alt="Chuck Norris Jokes" className="logo__img"/>

                <div className="categories">
                    <ul className="categorias__ul">
                        {categoriesJoke.map((joke, index) => (
                            <li className="categorias__li" key={index} onClick={() => handleJokeByCategory(joke)}>{joke}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <img src={categorySelected?.icon_url} alt={categorySelected?.value} />
                    <h3>{categorySelected?.value}</h3>
                </div>

                <div className="input-group">
                    <hr/>
                    <label>
                        Category:
                        <Input type="text" onChange={e => setSearchJoke(e.target.value)} placeholder="Type here the category" />
                    </label>
                    <Button type="button" onClick={handleJokes} > Find Jokes </Button>
                </div>
                
                <div className="joker">
                    {isLoad ? <img src={LoadGif} alt="load" className="joker__loading" /> : resultSearch.map(result => (
                        <div key={result.id} className="jokes-list__item">
                            <img src={result.icon_url} alt={result.value} />
                            <h3>{result.value}</h3>
                        </div>
                    ))}
                </div>
            </div>

        </HomeContainer>
    );
}

export default Home;
