// 이 파일은 게시판 목록 화면을 담당하는 컴포넌트 파일

import {useEffect, useState} from "react";
import styles from "../App.module.css";

function Home() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 과정인지 아닌지를 boolean으로 저장

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => {
                setList(json);
                setLoading(false); // 데이터를 불러오는 작업이 다 끝난다는 의미로 loading을 false
            })
            .catch(err => console.log(err));
    }, []);

    if (loading) {
        return <div>데이터를 로드 중입니다...</div>;
    }

    return (

        <div className={styles.container}>
            <h1 className={styles.title}>커뮤니티 게시판</h1>
            <table className={styles.table} >
                <thead className={styles.head}>
                <tr >
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자 ID</th>
                </tr>
                </thead>
                <tbody className={styles.body}>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.userId}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default Home;