const [users, setUsers] = useState([]);

  useEffect(() => {
    makeRequest.get("users/").then((res) => {
      setUsers(res.data);
    }).catch ((err) => {
      console.log(err);
    })
  }, [])