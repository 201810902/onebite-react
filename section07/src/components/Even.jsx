const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수
        //언마운트될때 정리함수를 호출하게 된다. 
    return () => {};
  }, []);
  return <div>짝수입니다</div>;
};
export default Even;
