import React from 'react'

export default function Body() {
  return (
    <div>
        <Article />
        <Article
        time="11/14/20"
        title="On the Street in Jersey City"
        image=""

        />
        </div>
  )
}



export function Article(props) {
  return (
    <div>
        <time>{props.time}</time>
        <h3>{props.title}</h3>
        <img src='/src/assets/images/blog-image-1.jpg'></img>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni in quis ex dolores? Eos illo cumque maiores dolores. Ad, odit sunt culpa, consequuntur eos reiciendis ex ut earum ab deleniti, rem harum nobis enim quisquam officia. Voluptatibus autem officiis ullam. Consequatur explicabo recusandae exercitationem. Cumque facilis provident recusandae iure, optio iste libero harum sapiente dolorum assumenda excepturi ex culpa quod iusto placeat quae molestiae nesciunt est sequi nihil laudantium. Perspiciatis quasi tempore nam esse dolore recusandae? Ab ullam quis autem? Mollitia doloribus assumenda nobis soluta delectus hic impedit tempora at quis dolor quia quae rem a ullam illum laborum, labore nam. Rem eum neque mollitia molestiae ex quisquam, aliquam accusantium in atque doloribus minus nobis, aut possimus doloremque excepturi fugiat, cum odit ducimus? Voluptatem iste ad modi doloremque hic eum, neque recusandae unde necessitatibus! Quidem ea vel dignissimos laudantium! Nemo illo, facilis totam nesciunt sunt nisi! Quo officiis nesciunt deserunt recusandae vitae ducimus asperiores, nisi illo sed alias nobis maiores, accusamus voluptatibus totam ratione omnis laboriosam blanditiis deleniti quidem accusantium. Tempore quam consectetur deserunt iusto est id quis nemo non praesentium nobis dolor explicabo veniam debitis quod veritatis quia totam odit ea suscipit ab fugiat officia, reiciendis quasi. Consequatur.</p>
    </div>
  )
}
