import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from '../../styles/Upload.module.css'
import { FILE_STORAGE } from '../../Redux/constants/StoreFileConstants'

export default function UploadPage() {
    
    const dispatch = useDispatch();

    const router = useRouter()

    const onChange = (info) => {
      const reader = new FileReader()
      reader.onload = e => {
        dispatch({type: FILE_STORAGE, payload: e.target})
      }
      reader.readAsText(info)
      router.push('/code')
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
            Upload
          </h1>
  
          <p className={styles.description}>
            Get started by uploading a file
          </p>
  
          <Upload beforeUpload={onChange} accept=".css">
            <Button 
              icon={<UploadOutlined />}
              className={styles.upload}
            >
              Click to Upload
            </Button>
          </Upload>

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