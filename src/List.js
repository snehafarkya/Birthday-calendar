import React from 'react'

const List = ({people}) => {
    return (
        <>
        <div>
          {people.map((name)=>{
              const {id,person,bdate,image}= name;
              return (
              <article key={id} className='per'>
                  <div className="flex">
                  <img src={image} id='img' />
                  <div>
                      <h3>{person}</h3>
                      <p>{bdate}</p>
                  </div>
                  </div>
              </article>
              )
          })}
        </div>
        </>
    )
}

export default List;
