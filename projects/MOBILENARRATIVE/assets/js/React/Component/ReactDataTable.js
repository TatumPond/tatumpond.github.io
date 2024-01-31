(() => {
    const Filters = (props) => {
        let updateGeneration = (clickEvent) => {
            props.updateFormState({
                generation: clickEvent.target.value,
            });
        }

        let updatePokemonGame = (clickEvent) => {
            props.updateFormState({
                pokemonGame: clickEvent.target.value,
            });
        }

        let updateVersion = (clickEvent) => {
            props.updateFormState({
                version: clickEvent.target.value,
            });
        }

        let updateRegion = (clickEvent) => {
            props.updateFormState({
                region: clickEvent.target.value,
            });
        }

        return(
            <React.Fragment>
                <p><b>Filter your data!</b></p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <b>Choose a game version</b>
                        <select
                            onChange={updateVersion}
                        >
                            <option value=''>&nbsp;</option>
                            <option value='Original'>Original</option>
                            <option value='Solitary'>Solitary</option>
                            <option value='Remake'>Remake</option>
                            <option value='Sequel'>Sequel</option>
                            <option value='Expansion Pack'>Expansion Pack</option>
                        </select>
                        <div className='col-md-2'></div>
                        <b>Choose a generation</b>

                    </div>
                    <div className='col-md-2'>
                        <select
                            onChange={updateGeneration}
                        >
                            <option value=''>&nbsp;</option>
                            <option value='I'>Generation I</option>
                            <option value='II'>Generation II</option>
                            <option value='III'>Generation III</option>
                            <option value='IV'>Generation IV</option>
                            <option value='V'>Generation V</option>
                            <option value='VI'>Generation VI</option>
                            <option value='VII'>Generation VII</option>
                            <option value='VIII'>Generation VIII</option>
                            <option value='IX'>Generation IX</option>
                        </select>
                    </div>
                    <div className='col-md-4'></div>
                    <b>Choose a Region</b>
                    <select
                        onChange={updateRegion}
                    >
                        <option value=''>&nbsp;</option>
                        <option value="Kanto">Kanto</option>
                        <option value="Johto">Johto</option>
                        <option value="Hoenn">Hoenn</option>
                        <option value="Sinnoh">Sinnoh</option>
                        <option value="Unova">Unova</option>
                        <option value="Kalos">Kalos</option>
                        <option value="Alola">Alola</option>
                        <option value="Galar">Galar</option>
                        <option value="Hisui">Hisui</option>
                        <option value="Paldea">Paldea</option>
                    </select>
                    <div className='col-md-2'></div>
                    <b>Choose a Pokemon Game</b>
                    <select
                        onChange={updatePokemonGame}
                    >
                        <option value=''>&nbsp;</option>
                        <option value="Red and Green">Red and Green</option>
                        <option value="Japanese Blue">Japanese Blue</option>
                        <option value="Red and Blue">Red and Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Gold and Silver">Gold and Silver</option>
                        <option value="Crystal">Crystal</option>
                        <option value="Ruby and Sapphire">Ruby and Sapphire</option>
                        <option value="FireRed and LeafGreen">FireRed and LeafGreen</option>
                        <option value="Emerald">Emerald</option>
                        <option value="Diamond and Pearl">Diamond and Pearl</option>
                        <option value="Platnium">Platnium</option>
                        <option value="HeartGold and SoulSilver">HeartGold and SoulSilver</option>
                        <option value="Black and White">Black and White</option>
                        <option value="Black 2 and White 2">Black 2 and White 2</option>
                        <option value="X and Y">X and Y</option>
                        <option value="Omega Ruby and Alpha Sapphire">Omega Ruby and Alpha Sapphire</option>
                        <option value="Sun and Moon"> Sun and Moon</option>
                        <option value="Ultra Sun and Ultra Moon">Ultra Sun and Ultra Moon</option>
                        <option value="Let's Go, Pikachu! and Let's Go, Eevee!">Let's Go, Pikachu! and Let's Go, Eevee!</option>
                        <option value="Sword and Shield">Sword and Shield</option>
                        <option value="The Isle of Armor">The Isle of Armor</option>
                        <option value="The Crown Tundra">The Crown Tundra</option>
                        <option value="Brilliant Diamond and Shining Pearl">Brilliant Diamond and Shining Pearl</option>
                        <option value="Legends of Arceus">Legends of Arceus</option>
                        <option value="Scarlet and Violet">Scarlet and Violet</option>
                        <option value="The Teal Mask">The Teal Mask</option>
                    </select>
                <div className='col-md-1'></div>
                </div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'></div>
                    <div className='col-md-2'></div>
                    <div className='col-md-3'></div>
                    <div className='col-md-2'></div>
                    <div className='col-md-1'></div>
                </div>
            </React.Fragment>
        )
    }

    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Pokemon Game</th>
                            <th>Generation</th>
                            <th>Developer</th>
                            <th>Publisher</th>
                            <th>Game Type</th>
                            <th>Version</th>
                            <th>Region</th>
                            <th>Number of Pokemon</th>
                        </tr>
                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.pokemonGame}</td>
                                    <td>{row.generation}</td>
                                    <td>{row.developer}</td>
                                    <td>{row.publisher}</td>
                                    <td>{row.gameType}</td>
                                    <td>{row.version}</td>
                                    <td>{row.region}</td>
                                    <td>{row.numberOfPokemon}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);

            this.originalData = props.originalData;

            this.state = {
                generation: "",
                pokemonGame: "",
                region: "",
                version: "",
            };

            this.updateFormState = this.updateFormState.bind(this);

        }

        updateFormState(specification) {
            this.setState(specification);

        }

        render() {

            let filteredData = this.originalData;
            console.log(this.state.generation);
            if (this.state.generation !== '') {
                filteredData = filteredData.filter((row) => row.generation === this.state.generation
                );
            }


            if (this.state.pokemonGame !== '') {
                filteredData = filteredData.filter((row) => row.pokemonGame === this.state.pokemonGame
                );
            }

            if (this.state.region !== '') {
                filteredData = filteredData.filter((row) => row.region === this.state.region
                );
            }

            if (this.state.version !== '') {
                filteredData = filteredData.filter((row) => row.version === this.state.version
                );
            }
            
            

            return (
                <React.Fragment>
                    <Filters

                        generation={this.state.generation}
                        pokemonGame={this.state.pokemonGame}
                        region={this.state.region}
                        version={this.state.version}
                        updateFormState = {this.updateFormState}

                    />

                    <hr />

                    <DataTable
                        dataToDisplay={filteredData}
                    />
                </React.Fragment>
            );
        }

    }

    const pokemonData = [
        {
            "pokemonGame": "Red and Green",
            "generation": "I",
            "developer": "Game Freak",
            "publisher": "Nintendo",
            "gameType": "RPG",
            "version": "Original",
            "region": "Kanto",
            "numberOfPokemon": "151"
        },
        {
            "pokemonGame": "Japanese Blue",
            "generation": "I",
            "developer": "Game Freak",
            "publisher": "Nintendo",
            "gameType": "RPG",
            "version": "Solitary",
            "region": "Kanto",
            "numberOfPokemon": "151"
        },
        {
            "pokemonGame": "Red and Blue",
            "generation": "I",
            "developer": "Game Freak",
            "publisher": "Nintendo",
            "gameType": "RPG",
            "version": "Original",
            "region": "Kanto",
            "numberOfPokemon": "151"
        },
        {
            "pokemonGame": "Yellow",
            "generation": "I",
            "developer": "Game Freak",
            "publisher": "Nintendo",
            "gameType": "RPG",
            "version": "Solitary",
            "region": "Kanto",
            "numberOfPokemon": "151"
        },
        {
            "pokemonGame": "Gold and Silver",
            "generation": "II",
            "developer": "Game Freak",
            "publisher": "Nintendo/Daewan",
            "gameType": "RPG",
            "version": "Original",
            "region": "Johto",
            "numberOfPokemon": "251"
        },
        {
            "pokemonGame": "Crystal",
            "generation": "II",
            "developer": "Game Freak",
            "publisher": "Nintendo",
            "gameType": "RPG",
            "version": "Solitary",
            "region": "Johto",
            "numberOfPokemon": "251"
        },
        {
            "pokemonGame": "Ruby and Sapphire",
            "generation": "III",
            "developer": "Game Freak and Creatures, Inc",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Original",
            "region": "Hoenn",
            "numberOfPokemon": "386"
        },
        {
            "pokemonGame": "FireRed and LeafGreen",
            "generation": "III",
            "developer": "Game Freak and Creatures, Inc",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Remake",
            "region": "Kanto",
            "numberOfPokemon": "386"
        },
        {
            "pokemonGame": "Emerald",
            "generation": "III",
            "developer": "Game Freak and Creatures, Inc",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Solitary",
            "region": "Hoenn",
            "numberOfPokemon": "386"
        },
        {
            "pokemonGame": "Diamond and Pearl",
            "generation": "IV",
            "developer": "Game Freak and Creatures, Inc",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Original",
            "region": "Sinnoh",
            "numberOfPokemon": "493"
        },
        {
            "pokemonGame": "Platnium",
            "generation": "IV",
            "developer": "Game Freak and Creatures, Inc",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Solitary",
            "region": "Sinnoh",
            "numberOfPokemon": "493"
        },
        {
            "pokemonGame": "HeartGold and SoulSilver",
            "generation": "IV",
            "developer": "Game Freak and Creatures, Inc",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Remake",
            "region": "Johto",
            "numberOfPokemon": "493"
        },
        {
            "pokemonGame": "Black and White",
            "generation": "V",
            "developer": "Game Freak and Creatures, Inc",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Original",
            "region": "Unova",
            "numberOfPokemon": "649"
        },
        {
            "pokemonGame": "Black 2 and White 2",
            "generation": "V",
            "developer": "Game Freak and Creatures, Inc",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Sequel",
            "region": "Unova",
            "numberOfPokemon": "649"
        },
        {
            "pokemonGame": "X and Y",
            "generation": "VI",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Original",
            "region": "Kalos",
            "numberOfPokemon": "721"
        },
        {
            "pokemonGame": "Omega Ruby and Alpha Sapphire",
            "generation": "VI",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Remake",
            "region": "Hoenn",
            "numberOfPokemon": "721"
        },
        {
            "pokemonGame": "Sun and Moon",
            "generation": "VII",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Original",
            "region": "Alola",
            "numberOfPokemon": "802"
        },
        {
            "pokemonGame": "Ultra Sun and Ultra Moon",
            "generation": "VII",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Solitary",
            "region": "Alola",
            "numberOfPokemon": "807"
        },
        {
            "pokemonGame": "Let's Go, Pikachu! and Let's Go, Eevee!",
            "generation": "VII",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Remake",
            "region": "Kanto",
            "numberOfPokemon": "807"
        },
        {
            "pokemonGame": "Sword and Shield",
            "generation": "VIII",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Original",
            "region": "Galar",
            "numberOfPokemon": "890"
        },
        {
            "pokemonGame": "The Isle of Armor",
            "generation": "VIII",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Expansion Pack",
            "region": "Galar",
            "numberOfPokemon": "893"
        },
        {
            "pokemonGame": "The Crown Tundra",
            "generation": "VIII",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Expansion Pack",
            "region": "Galar",
            "numberOfPokemon": "898"
        },
        {
            "pokemonGame": "Brilliant Diamond and Shining Pearl",
            "generation": "VIII",
            "developer": "ILCA",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Remake",
            "region": "Sinnoh",
            "numberOfPokemon": "898"
        },
        {
            "pokemonGame": "Legends: Arceus",
            "generation": "VIII",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "Action PG",
            "version": "Original",
            "region": "Hisui",
            "numberOfPokemon": "905"
        },
        {
            "pokemonGame": "Scarlet and Violet",
            "generation": "IX",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Original",
            "region": "Paldea",
            "numberOfPokemon": "1012"
        },
        {
            "pokemonGame": "The Teal Mask",
            "generation": "IX",
            "developer": "Game Freak",
            "publisher": "Nintendo and The Pokemon Company",
            "gameType": "RPG",
            "version": "Expansion Pack",
            "region": "Paldea",
            "numberOfPokemon": "1012"
        },
    ]

    const container = document.getElementById("react-data-table");
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={pokemonData} />);

})();
