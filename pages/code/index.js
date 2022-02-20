import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Button, message } from 'antd'
import InputArea from './components/inputArea'
import styles from '../../styles/Code.module.css'

export default function UploadPage() {
    
    const dispatch = useDispatch();

	const [selectValue, setSelectValue] = useState("");

	const [expanded, setExpanded] = useState(false);

	const [minify, setMinify] = useState(false);

	const [text, setText] = useState("")

    const router = useRouter();

    const file = useSelector((store) => store.file);

	const onChange = e => {
		setSelectValue(e.target.value)
	}

	useEffect(() => {
		setText(file.file.result)
	}, [file])

	const sort = () => {
		if (selectValue === "minify"){
			if (!minify){
				const newText = text.replace(/\r?\n|\r/g, '');
				setText(newText);
				setMinify(true);
			} else { message.error("Already minified", 3) }
		}

		else if (selectValue === "expand"){
			if (!expanded){
				const re = /{\s/g;
				const newText = text.replace(re, "{\n" + " ")
				re = /;\s/g
				newText = newText.replace(re, ";\n" + " ")
				re = /;}/g
				newText = newText.replace(re, ";\n}")
				re = /}[\w+]/g
				const result = null;
				while ((result = re.exec(newText)) != null) {
					const reg = new RegExp(`${result[0]}`, "g")
					newText = newText.replace(reg, `}\n\n${result[0][1]}`)
				}

				re = new RegExp("}#", "g")
				newText = newText.replace(re, "}\n\n#")

				re = new RegExp("}.", "g")
				newText = newText.replace(re, "}\n\n.")

				setText(newText)
				setExpanded(true)

			} else { message.error("Already Expanded", 3) }
		}

		else if (selectValue === "a-z"){
			const array = ["a", "b", "c"]
			
		}
	}

    return (
      <div className={styles.container}>
        <Head>
          <title>CSS Sorter</title>
          <meta name="description" content="Sort your CSS code" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Sort your code!
          </h1>

		  <div className={styles.sortSection}>
		  	<select onChange={onChange}>
			  	<option value=''>Select sort option</option>
				<option value='minify'>Minify</option>
				<option value='expand'>Expand</option>
				<option value='a-z'>Alphabetical order</option>
			</select> 	
			<Button onClick={sort}>Sort</Button>
			<Button>Reset</Button>
		  </div>

		  <div className={styles.textAreaBlock}>
          	<InputArea content={text}/>
		  </div>

		  <Button className={styles.copyButton}>
			Copy
		  </Button>

        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    )
  }