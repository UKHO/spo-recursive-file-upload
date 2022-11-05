# SPO Recursive File Upload

Upload a file, or files, to SharePoint Online using the `spsave` package.

## Inputs

`site_url`: Destination SPO site URL (without tralling / i.e. https://site not https://site/)
`username`: SPO account username. **Must have write privileges on the designated site.**  
`password`: SPO account password.  
`destination_path`: Relative destination path on SPO site. If path does not exist, it will be created. (without prefixed and trailing forward slash, i.e. 'How To Train Your Dragon/docs' not '/How To Train Your Dragon/docs/')  
`source_path`: Source file path(s) to be uploaded to SPO. Separate multiple files using a semicolon `;`.
`base`: **DEPRICATED** If you want to preserve folders structure inside SharePoint folder, you can provide a base for you files. For example when using glob ['build/css/*.*'] and base: 'build', all css files will be loaded under [SharePoint folder]/css.  

## Things you need to know

- Files are directly uploaded via the `glob` method in the `spsave` package.
- SPO account must not have multi-factor authentication turned on, or must use an application-specific password. Service accounts are preferred.
- Multiple files are uploaded to the same destination path.
- run `npm install` to get packages
- Pack is complied using vercel/ncc
  - To build just run `npm run package`, this will compile the typescript and run ncc

## Example Usage

```yaml
...
uses: ukho/spo-recursive-file-upload@vversion
with:
  site_url: https://domain.sharepoint.com/sites/my-site
  username: ${{ secrets.SPO_USERNAME }}
  password: ${{ secrets.SPO_PASSWORD }}
  destination_path: Shared Documents
  source_path: docs
  base: docs
  # or for multiple files
  # source_path: dist/my-file1.txt;dist/my-file2.txt
...
```

## Issues

This is released under an MIT any issues please feel free to take a copy, we will not be handling issues outside of our own use cases.

## Credits

This base application was taken from [s-KaiNet's SPSave](https://github.com/s-KaiNet/spsave).
