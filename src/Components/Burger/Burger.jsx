import React, {useState} from 'react'
import s from './Burger.module.scss'
import BurgerMenu from './BurgerMenu'

const Burger = () => {

    const [active, setActive] = useState(false)

    return (
        <div className={s.container}>
            <div className={s.nav}>
                <div className={s.burger} onClick={() => setActive(!active)} >
                    <span />
                </div>
            </div>
            <div className={s.main}>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad animi consectetur ducimus est et explicabo facilis hic magnam modi officia officiis optio quaerat quas quasi ratione saepe unde velit?</span><span>Commodi consequuntur cupiditate dolore ducimus eum ex impedit necessitatibus nostrum placeat voluptatem. Cupiditate eligendi enim facere impedit ipsam ipsum iste, libero necessitatibus odit omnis pariatur porro, quasi quis repellat vero!</span><span>Aliquam eveniet magni maxime nihil non officia quam quisquam voluptatum? Adipisci, animi at consectetur dignissimos, distinctio, dolorum esse odio porro quasi veritatis voluptas voluptate! Ad architecto hic laboriosam maiores vel!</span><span>Ab architecto at commodi deserunt dignissimos doloribus eum eveniet, iste odio pariatur quis reiciendis sint voluptatem. Debitis doloremque dolores ea harum hic molestias nostrum omnis veritatis. Laborum nisi perspiciatis veniam.</span><span>Architecto, at dolorem fugiat itaque modi odio, placeat quae, quas quasi sed tempore temporibus! Architecto asperiores, dolor et ex impedit inventore minus necessitatibus pariatur perferendis possimus quidem sequi sint! Repellat.</span><span>Alias architecto asperiores beatae commodi corporis enim est excepturi expedita explicabo id labore minima nesciunt, nisi omnis perspiciatis porro possimus quis quisquam quo recusandae rerum sapiente suscipit ullam voluptas voluptatem.</span><span>Aliquam amet architecto autem consectetur dignissimos distinctio dolorum enim et id, ipsum iure magni minus nemo non odio provident quam qui quo reprehenderit saepe voluptas voluptatem voluptates. Incidunt repellendus, veritatis.</span><span>A alias blanditiis cupiditate debitis dolorum eum facilis, inventore laudantium magni maxime molestias nemo nihil obcaecati quia ratione reprehenderit tempora, vitae! Animi at dicta ea inventore iste laboriosam minima voluptas!</span><span>Distinctio harum officiis pariatur quasi voluptate. Aliquid enim libero maiores nam possimus quam soluta. Aliquid, debitis ea eum exercitationem, labore libero modi molestiae molestias officia perferendis qui quibusdam quisquam voluptatibus?</span><span>Accusantium asperiores corporis culpa cupiditate dolor doloremque dolorum ea et impedit incidunt labore laudantium magni maiores minus nam neque possimus quaerat quas quidem, quis recusandae repellendus rerum suscipit tenetur vel.</span></p>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad animi consectetur ducimus est et explicabo facilis hic magnam modi officia officiis optio quaerat quas quasi ratione saepe unde velit?</span><span>Commodi consequuntur cupiditate dolore ducimus eum ex impedit necessitatibus nostrum placeat voluptatem. Cupiditate eligendi enim facere impedit ipsam ipsum iste, libero necessitatibus odit omnis pariatur porro, quasi quis repellat vero!</span><span>Aliquam eveniet magni maxime nihil non officia quam quisquam voluptatum? Adipisci, animi at consectetur dignissimos, distinctio, dolorum esse odio porro quasi veritatis voluptas voluptate! Ad architecto hic laboriosam maiores vel!</span><span>Ab architecto at commodi deserunt dignissimos doloribus eum eveniet, iste odio pariatur quis reiciendis sint voluptatem. Debitis doloremque dolores ea harum hic molestias nostrum omnis veritatis. Laborum nisi perspiciatis veniam.</span><span>Architecto, at dolorem fugiat itaque modi odio, placeat quae, quas quasi sed tempore temporibus! Architecto asperiores, dolor et ex impedit inventore minus necessitatibus pariatur perferendis possimus quidem sequi sint! Repellat.</span><span>Alias architecto asperiores beatae commodi corporis enim est excepturi expedita explicabo id labore minima nesciunt, nisi omnis perspiciatis porro possimus quis quisquam quo recusandae rerum sapiente suscipit ullam voluptas voluptatem.</span><span>Aliquam amet architecto autem consectetur dignissimos distinctio dolorum enim et id, ipsum iure magni minus nemo non odio provident quam qui quo reprehenderit saepe voluptas voluptatem voluptates. Incidunt repellendus, veritatis.</span><span>A alias blanditiis cupiditate debitis dolorum eum facilis, inventore laudantium magni maxime molestias nemo nihil obcaecati quia ratione reprehenderit tempora, vitae! Animi at dicta ea inventore iste laboriosam minima voluptas!</span><span>Distinctio harum officiis pariatur quasi voluptate. Aliquid enim libero maiores nam possimus quam soluta. Aliquid, debitis ea eum exercitationem, labore libero modi molestiae molestias officia perferendis qui quibusdam quisquam voluptatibus?</span><span>Accusantium asperiores corporis culpa cupiditate dolor doloremque dolorum ea et impedit incidunt labore laudantium magni maiores minus nam neque possimus quaerat quas quidem, quis recusandae repellendus rerum suscipit tenetur vel.</span></p>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad animi consectetur ducimus est et explicabo facilis hic magnam modi officia officiis optio quaerat quas quasi ratione saepe unde velit?</span><span>Commodi consequuntur cupiditate dolore ducimus eum ex impedit necessitatibus nostrum placeat voluptatem. Cupiditate eligendi enim facere impedit ipsam ipsum iste, libero necessitatibus odit omnis pariatur porro, quasi quis repellat vero!</span><span>Aliquam eveniet magni maxime nihil non officia quam quisquam voluptatum? Adipisci, animi at consectetur dignissimos, distinctio, dolorum esse odio porro quasi veritatis voluptas voluptate! Ad architecto hic laboriosam maiores vel!</span><span>Ab architecto at commodi deserunt dignissimos doloribus eum eveniet, iste odio pariatur quis reiciendis sint voluptatem. Debitis doloremque dolores ea harum hic molestias nostrum omnis veritatis. Laborum nisi perspiciatis veniam.</span><span>Architecto, at dolorem fugiat itaque modi odio, placeat quae, quas quasi sed tempore temporibus! Architecto asperiores, dolor et ex impedit inventore minus necessitatibus pariatur perferendis possimus quidem sequi sint! Repellat.</span><span>Alias architecto asperiores beatae commodi corporis enim est excepturi expedita explicabo id labore minima nesciunt, nisi omnis perspiciatis porro possimus quis quisquam quo recusandae rerum sapiente suscipit ullam voluptas voluptatem.</span><span>Aliquam amet architecto autem consectetur dignissimos distinctio dolorum enim et id, ipsum iure magni minus nemo non odio provident quam qui quo reprehenderit saepe voluptas voluptatem voluptates. Incidunt repellendus, veritatis.</span><span>A alias blanditiis cupiditate debitis dolorum eum facilis, inventore laudantium magni maxime molestias nemo nihil obcaecati quia ratione reprehenderit tempora, vitae! Animi at dicta ea inventore iste laboriosam minima voluptas!</span><span>Distinctio harum officiis pariatur quasi voluptate. Aliquid enim libero maiores nam possimus quam soluta. Aliquid, debitis ea eum exercitationem, labore libero modi molestiae molestias officia perferendis qui quibusdam quisquam voluptatibus?</span><span>Accusantium asperiores corporis culpa cupiditate dolor doloremque dolorum ea et impedit incidunt labore laudantium magni maiores minus nam neque possimus quaerat quas quidem, quis recusandae repellendus rerum suscipit tenetur vel.</span></p>
            </div>
            <BurgerMenu active={active} setActive={setActive} />
        </div>
    )
}

export default Burger
