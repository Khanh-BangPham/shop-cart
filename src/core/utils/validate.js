
export const patternModel = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // phone: /(^([0-9]{3}) |[0-9]{3}-[0-9]{3}-[0-9]{4}$)/, //| (84|0[3|5|7|8|9])+([0-9]{8})
    phone: /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}/, // eslint-disable-line
    // eslint-disable-next-line
    url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    cartNum: /^$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])((?=.*\d)|(?=.*[@$!%*?&]))[A-Za-z\d@$!%*?&]{6,}$/,
    date: /^\d{2}\/\d{2}\/\d{4}$/
}



const MESSAGE_ERROR = {
    required: '*Please input the information!',
    pattern: '*Please input the information like format',
    minMax: (min, max) => {
        if (min && max) return `This field must be ${min}-${max} characters`
        if (min) return `This field must be greater than ${min} characters`
        if (max) return `This field must be less than ${min} characters`
    },
    inValidateDate: 'Date invalid',
    confirm: '2 Field is not the same'
}




const validateRequired = (value, r) => {
    if (
        (typeof value === 'string' && !value.trim()) ||
        ['undefined', 'null'].indexOf(typeof value) !== -1 ||
        typeof value === 'number' && value === 0 ||
        typeof value === 'boolean' && value === false ||
        Array.isArray(value) && value.length === 0 ||
        value === null
    ) {
        return r.message || MESSAGE_ERROR.required
    }
}

const validatePattern = (value, r) => {

    let pattern = r.pattern
    if (patternModel[pattern]) {
        pattern = patternModel[pattern]
    }

    if (typeof pattern === 'string') {
        pattern = new RegExp(pattern, 'gi')
    }

    if (value && !(pattern instanceof RegExp && pattern.test(value.toString()))) {
        return r.message || MESSAGE_ERROR.pattern
    }
}

const validateMinMax = (value, r) => {
    value = value?.toString() || ''
    if (
        (r.min && r.max && (value.length < r.min || value.length > r.max)) ||
        (r.min && value.length < r.min) ||
        (r.max && value.length > r.max)
    ) {
        return r.message || MESSAGE_ERROR.minMax(r.min, r.max)
    }
}

const confirm = () => { }

const validateDate = (value, r) => {
    if (moment(value).format('x') === 'Invalid date') {
        return r.message || MESSAGE_ERROR.inValidateDate
    }
}




export const validate = (value, rules = [], form = {}) => {

    let error
    rules?.forEach((r) => {
        if (error) return;

        if (typeof r === 'function') {
            const t = r(value, form || {})
            if (t) {
                error = t
            }

        } else {
            if (r?.required) {
                error = validateRequired(value, r)
            } else if (r?.invalidDate) {
                error = validateDate(value, r)
            } else if (r?.pattern) {
                error = validatePattern(value, r)
            } else if (r?.min || r?.max) {
                error = validateMinMax(value, r)
            } else if (r.confirm && form?.[r.confirm] !== value) {
                error = r.message || MESSAGE_ERROR.confirm
            }
        }

    })


    return error
}