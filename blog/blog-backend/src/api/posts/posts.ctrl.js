let postId = 1; // id의 초기값

// posts 배열 초기 데이터
const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
];

/* 포스트 작성
POST /api/posts
{title, body}
*/
exports.write = (ctx) => {
    // REST API의 Request Body는 ctx.request.body에서 조회할 수 있다.
    const { title, body } = ctx.request.body;
    postId += 1; // 기존 postId 값에 1을 더한다.
    const post = { id: postId, title, body };
    posts.push(post);
    ctx.body = post;
};

/* 포스트 목록 조회
 GET /api/posts
  */
exports.list = (ctx) => {
    ctx.body = posts;
};

/* 특정 포스트 조회
GET /api/posts/:id
*/
exports.read = (ctx) => {
    const { id } = ctx.params;
    // 주어진 id 값으로 포스트를 찾는다.
    // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
    // 비교햘 p.id 값을 문자열로 변경해야 한다.
    const post = posts.find((p) => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환한다.
    if (!post) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    ctx.body = post;
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
exports.remove = (ctx) => {
    const { id } = ctx.params;
    // 해당 id를 가진 post가 몇 번째인지 확인한다.
    const index = posts.findIndex((p) => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환한다.
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    // index 번째 아이템을 제거한다.
    posts.splice(index, 1);
    ctx.status = 204; // No Content
};
