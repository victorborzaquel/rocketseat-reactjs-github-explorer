import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";

interface IRepository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/victorborzaquel/repos')
      .then(response => response.json())
      .then(data => { setRepositories(data); console.log(data) })
  }, [])

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
      </ul>
    </section>
  )
}