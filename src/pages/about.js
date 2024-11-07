export default function AboutPage() {
    const page = document.createElement("div");

    const text = document.createElement("p");
    text.textContent = `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa natus omnis atque tempora, libero ut odio voluptates dolores qui aspernatur et doloribus, vel facilis excepturi illum? Porro, expedita doloremque.
        Laboriosam dolorem, suscipit blanditiis vitae, itaque in iure numquam possimus harum libero sed qui necessitatibus nesciunt tempore! A, ea neque eaque sit odio alias, possimus perferendis facilis cumque aperiam sapiente.
        Asperiores adipisci molestiae consequuntur mollitia non voluptatum ab, assumenda obcaecati nam qui dicta hic aliquid similique! Voluptatum corporis sequi earum? Dolor, veritatis? Expedita excepturi nihil dolor exercitationem eaque velit tempore!
        Adipisci eaque nulla officia quisquam, laborum dolorem expedita deleniti, suscipit obcaecati doloremque tempora voluptas rem aliquid qui quas sequi explicabo consequuntur assumenda! Aperiam suscipit rem facere. Eum similique consectetur architecto!
        Fuga esse omnis dolore unde deleniti, aut reiciendis perspiciatis illo architecto quidem sapiente, minima earum iste delectus accusamus. Ratione aliquid laboriosam quia eveniet, molestias beatae delectus totam corporis tempore asperiores.
        Enim, mollitia quidem. Magnam accusamus repellendus ipsum quaerat illo velit recusandae, expedita aliquam ea, ex, fugit ab suscipit perspiciatis. Tempore consectetur adipisci repellendus, unde ipsam laudantium ad atque quasi officiis!
        Illum nam possimus beatae ex corrupti iste aliquam voluptas animi cumque temporibus eveniet maxime atque, ad mollitia ullam, fugiat voluptatem quas facilis quae sunt nostrum vel ipsam. Doloremque, velit fugiat!
        Fuga laborum repellat blanditiis? Recusandae laudantium facilis dicta illo dignissimos culpa repellat, consequatur dolore ipsam possimus sed sapiente similique voluptatum sequi reprehenderit molestias, nobis ea quae, eum quasi aut! Minima.
        Eos beatae perspiciatis quas rem quidem cupiditate, ad libero, pariatur debitis accusantium facilis laboriosam omnis at aliquam voluptatem est exercitationem quaerat necessitatibus. Accusantium voluptate unde officia debitis aperiam nulla magnam?
        Expedita totam quas possimus temporibus tempora placeat consectetur repellat dignissimos illum quae nostrum ipsum id quos alias explicabo, omnis necessitatibus, quia aut, quam voluptatem laudantium! Quos aliquid error perspiciatis magni?
    `;
    text.classList.add("about");
    page.appendChild(text);

    return page;
}